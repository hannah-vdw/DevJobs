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
	private static String apiKey;
	private static String appId;
	
	public JobsResource(@Value("${api.key}") String apiKey, @Value("${app.id}") String appId) {
		this.apiKey = apiKey;
		this.appId = appId;
	}
	
	@Autowired
	private RestTemplate restTemplate;
	
	
	@GetMapping("/jobs")
	public List<Object> getJobs() {
		
		String url = "https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=" + appId + "&app_key=" + apiKey + "&what=juniordeveloper&where=london&content-type=application/json";
		
		System.out.println("Hey there:" + appId + "it's me" + apiKey);
	
		Object jobs = restTemplate.getForObject(url, Object.class);
		
		return Arrays.asList(jobs);
//		make it Jobs(result) jobBuilder -> jobs -> job
	}
}




//Job job = restTemplate.getForObject(
//Job.class