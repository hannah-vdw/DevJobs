package com.devjobs.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.devjobs.model.Jobs;
import com.devjobs.model.Results;

@RestController

@RequestMapping("/jobs")

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
	public List<Results> getJobs() {

		String url = "https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=" + appId + "&app_key=" + apiKey
				+ "&what=juniordeveloper&where=london&content-type=application/json";

		Results results = restTemplate.getForObject(url, Results.class);
		

		System.out.println("RESULTS: " + results.getResults());
		
		Jobs jobs = new Jobs(results);
		System.out.println("LIST: " + jobs.jobList);
		
		
		jobs.setOverview();
		System.out.println("OVERVIEW: " + jobs.getOverview());
		
		jobs.setDetails();
		System.out.println("DETAILS: " + jobs.getDetails());
		
		return Arrays.asList(results);
	}
}

