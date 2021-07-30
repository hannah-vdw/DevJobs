package com.devjobs.model;

import java.util.ArrayList;
import java.util.Map;

import com.fasterxml.jackson.databind.ObjectMapper;

public class Jobs {

	private String title;
	private Long jobId;
	public ArrayList<Object> results;
	public Object item;


	public ArrayList<Object> getResults() {
		return results;
	}

	public void setResults(ArrayList<Object> results) {
		this.results = results;
	}

	public Object getItem() {
		return item;
	}

	public void setItem() {
		this.item = results.get(0);
	}

	public String getTitle() {
		return title;
	}

	public void setTitle() {
		ObjectMapper objectMapper = new ObjectMapper();
		Map<String, Object> map = objectMapper.convertValue(item, Map.class);
		
		map.forEach((k,v)-> {
			if (k == "title") {
				this.title = v.toString();
			}
		});
	}
	
	public Long getJobId() {
		return jobId;
	}
	
	public void setJobId() {
		ObjectMapper objectMapper = new ObjectMapper();
		Map<String, Object> map = objectMapper.convertValue(item, Map.class);
		
		map.forEach((k,v)-> {
			if (k == "id") {
				this.jobId = Long.valueOf(v.toString());		
			}
		});
	}

}
