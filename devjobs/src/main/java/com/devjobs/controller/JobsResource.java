package com.devjobs.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.devjobs.model.Jobs;
import com.devjobs.model.Results;


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
	@CrossOrigin(origins = "http://localhost:3000")
	public List<ArrayList<Map<String, String>>> getJobs() {

		String url = "https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=" + appId + "&app_key=" + apiKey
				+ "&what=developer&where=london&content-type=application/json";

		Results results = restTemplate.getForObject(url, Results.class);
		

		System.out.println("RESULTS: " + results.getResults());
		
		Jobs jobs = new Jobs(results);
		System.out.println("LIST: " + jobs.jobList);
		
		
		jobs.setOverview();
		System.out.println("OVERVIEW: " + jobs.getOverview());
		
		jobs.setDetails();
		System.out.println("DETAILS: " + jobs.getDetails());
		
		return Arrays.asList(jobs.getDetails());
	}
	
	@RequestMapping(value = "location", method = RequestMethod.POST, consumes = "multipart/form-data", headers = "Access-Control-Expose-Headers: Access-Control-Allow-Origin")
		@ResponseStatus(HttpStatus.CREATED)
			public void location(@RequestParam("text") MultipartFile text) {
	
		System.out.println("LOCATION***********************: " + text);}
	 
//	@Bean
//	    public WebMvcConfigurer corsConfigurer() {
//	        return new WebMvcConfigurerAdapter() {
//	            @Override
//	            public void addCorsMappings(CorsRegistry registry) {
//	            registry.addMapping("/**")
//	                    .allowedOrigins("http://localhost:3000")
//	                    .allowedMethods("PUT", "DELETE", "GET", "POST") //or allow all as you like
//	                    .allowedHeaders("header1", "header2", "header3")
//	                    .exposedHeaders("header1", "header2")
//	                    .allowCredentials(false).maxAge(3600);
//	             }
//	        };
//	    }
}

