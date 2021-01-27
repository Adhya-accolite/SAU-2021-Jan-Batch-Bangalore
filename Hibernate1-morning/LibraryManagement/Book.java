package com.acc.library;

public class Book {

	private int id;
	private String title;
	private String author;
	private int pubYear;

	public Book() {}
	public Book( String title, String author, int pubYear) {
		super();
		
		this.title = title;
		this.author = author;
		this.pubYear = pubYear;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public  void setTitle(String title) {
		this.title = title;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public int getPubYear() {
		return pubYear;
	}

	public void setPubYear(int pubYear) {
		this.pubYear = pubYear;
	}

}
