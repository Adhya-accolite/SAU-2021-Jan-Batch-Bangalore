package com.accolit.hibernatespring.entities;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import lombok.Data;

@Entity
@Data
public class School {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Integer school_id;
	 
	 @Column
	 @ElementCollection
	 @OneToMany(targetEntity=Quiz.class, mappedBy="school", cascade = CascadeType.ALL,fetch=FetchType.EAGER)
	    private Set<Quiz> quiz;

	    @Column
	    private String Address;

	    public Integer getId() {
		return school_id;
	}

	public void setId(Integer school_id) {
		this.school_id = school_id;
	}
	
	public Set<Quiz> getQuiz() {
		return quiz;
	}

	public void setQuiz(Set<Quiz> quiz) {
		this.quiz = quiz;
	}

	public String getAddress() {
		return Address;
	}

	public void setAddress(String address) {
		Address = address;
	}

		
}
