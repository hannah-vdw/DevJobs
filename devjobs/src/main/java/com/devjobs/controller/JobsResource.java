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

import com.devjobs.model.Jobs;

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
	public List<Jobs> getJobs() {

		String url = "https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=" + appId + "&app_key=" + apiKey
				+ "&what=juniordeveloper&where=london&content-type=application/json";

		Jobs jobs = restTemplate.getForObject(url, Jobs.class);

		System.out.println("RESULTS: " + jobs.getResults());

		jobs.setItem();
		
		System.out.println("TITLE IS: " + jobs.getTitle());
		
		jobs.setTitle();
		
		return Arrays.asList(jobs);
//		make it Jobs(result) jobBuilder -> jobs -> job
	}
}

//Job job = restTemplate.getForObject(
//Job.class