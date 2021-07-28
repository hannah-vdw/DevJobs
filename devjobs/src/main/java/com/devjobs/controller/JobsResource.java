package com.devjobs.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

//import com.java.devjobs.model.Job;


@RestController

//@RequestMapping("/jobs")

@Configuration
public class JobsResource {
	
	@Value("${api.key}")
	private String apiKey;
	
	@Value("${app.id}")
	private String appId;
	
//	private static String url = "https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=" + appId + "&app_key=" + apiKey + "&what=juniordeveloper&where=london&content-type=application/json";
	
	private static String url = "https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=43a2f03d&app_key=6166dec3f067687300360f6704b92a81&what=juniordeveloper&where=london&content-type=application/json";
	
	@Autowired
	private RestTemplate restTemplate;
	
	@GetMapping("/jobs")
	public List<Object> getJobs() {
		
		System.out.println(appId + apiKey);
	
		Object[] jobs = restTemplate.getForObject(url, Object[].class);
		
		return Arrays.asList(jobs);
	}
}




//Job job = restTemplate.getForObject(
//url + appId + "&app_key=" + apiKey + "&what=juniordeveloper&where=london",
//Job.class