package com.devjobs.model;

import java.util.Map;

import com.fasterxml.jackson.databind.ObjectMapper;

public class Jobs {
	//private String title;
	//private Long jobId;
	public Results jobList = new Results();
	
	public Jobs(Results results) {
		this.jobList = results;
	}
	
//	public Long getJobId() {
//		return jobId;
//	}

//	public void setJobId() {
//		this.jobId = jobId;
////		ObjectMapper objectMapper = new ObjectMapper();
////		Map<String, Object> map = objectMapper.convertValue(jobList.getItem(), Map.class);
////		
////		map.forEach((k,v)-> {
////			if (k == "id") {
////				this.jobId = Long.valueOf(v.toString());		
////			}
////		});
//	}
//	
//	public String getTitle() {
//		return title;
//	}
//
//	public void setTitle() {
//		this.title = title;
//		System.out.println(jobList);
		
//		ObjectMapper objectMapper = new ObjectMapper();
//		Map<String, Object> map = objectMapper.convertValue(jobList.getItem(), Map.class);
//		
//		map.forEach((k,v)-> {
//			if (k == "title") {
//				this.title = v.toString();
//			}
//		});
//	}

}
