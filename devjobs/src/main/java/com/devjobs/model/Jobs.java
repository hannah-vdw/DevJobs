package com.devjobs.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.databind.ObjectMapper;

public class Jobs {
	
	public Results jobList = new Results();
	private ArrayList<Object> overview;
	public ArrayList<Map<String, String>> details;
	
	
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

	public ArrayList<Map<String, String>> getDetails() {
		return details;
	}

	
	public void setDetails() {
		
		this.details = new ArrayList<Map<String, String>>();
		
		for(int i=0; i<overview.size(); i++) {			
			
			ObjectMapper objectMapper = new ObjectMapper();
			Map<Object, Object> map = objectMapper.convertValue(overview.get(i), Map.class);			
				
			HashMap<String, String> hashItem = new HashMap<String, String>();
			
			map.forEach((k, v)->{
				
				if (k == "title") {					
					hashItem.put(k.toString(), v.toString());
				} else if (k == "id")  {
					hashItem.put(k.toString(), v.toString());
				} else if (k == "description")  {
					hashItem.put(k.toString(), v.toString());
				}
//			
//				System.out.println("KEY: " + k + " class is " + k.getClass() + " VALUE: " + v + " class is " + v.getClass());
			});
			
			this.details.add(hashItem);
		}
		
	}
	


}
