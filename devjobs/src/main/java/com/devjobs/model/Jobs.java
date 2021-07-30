package com.devjobs.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.databind.ObjectMapper;

public class Jobs {
	//private String title;
	//private Long jobId;
	public Results jobList = new Results();
	private ArrayList<Object> overview;
	private HashMap<Object, Object> details;
	private Object title;
	private Object jobID;
	
	public Jobs(Results results) {
		this.jobList = results;
	}
	
	public Object getOverview(){
		return overview;
	}
	
	public void setOverview() {
		ObjectMapper objectMapper = new ObjectMapper();
		Map<Object, Object> map = objectMapper.convertValue(jobList, Map.class);
		
		map.forEach((k,v)-> {
			this.overview = (ArrayList<Object>) v;
		});
	}

	public HashMap<Object, Object> getDetails() {
		return details;
	}

	public void setDetails() {
		
		for(int i=0; i<overview.size(); i++) {
			
			ObjectMapper objectMapper = new ObjectMapper();
			Map<Object, Object> map = objectMapper.convertValue(overview.get(i), Map.class);
			
			map.forEach((k, v)->{
				this.details.put(k, v);
				
//				System.out.println("KEY: " + k + " VALUE: " + v);
			});
		}
		
		
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
