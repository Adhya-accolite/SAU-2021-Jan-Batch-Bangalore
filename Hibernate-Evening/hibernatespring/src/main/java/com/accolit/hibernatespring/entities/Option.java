package com.accolit.hibernatespring.entities;

import java.util.List;


import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import javax.persistence.OneToOne;



@Entity
public class Option {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	List< Quiz > id;
	@Column
    private String option;

    @Column
    private Boolean isCorrect;

    public List<Quiz> getId() {
		return id;
	}

	public void setId(List<Quiz> id) {
		this.id = id;
	}

	public String getOption() {
		return option;
	}

	public void setOption(String option) {
		this.option = option;
	}

	public Boolean getIsCorrect() {
		return isCorrect;
	}

	public void setIsCorrect(Boolean isCorrect) {
		this.isCorrect = isCorrect;
	}

	
   

}

