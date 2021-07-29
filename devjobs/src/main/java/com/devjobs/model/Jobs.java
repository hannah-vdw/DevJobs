package com.devjobs.model;

import java.util.ArrayList;


public class Jobs {

//	private String title;
//	private Long jobId;
	public ArrayList<Object> results;
	public Object item;
	
	public Jobs () {
		super();
	}

	
	public Jobs(ArrayList<Object> results) {
		this.results = results;
	}
	
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
		System.out.println("***********" + results);
		System.out.println("***********" + results.get(0));
		this.item = results.get(0);
	}


//	public String getTitle() {
//		return title;
//	}
//	
//	public void setTitle() {
//		this.title = item.title;
//	}
////	
//	public Long getJobId() {
//		return jobId;
//	}
//	
//	public void getJobId(Long jobId) {
//		this.jobId = jobId;
//	}
	
}
