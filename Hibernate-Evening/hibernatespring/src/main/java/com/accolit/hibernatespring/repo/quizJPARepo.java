package com.accolit.hibernatespring.repo;

import com.accolit.hibernatespring.entities.Quiz;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public class quizJPARepo {
	
	public interface quizJPARepository extends CrudRepository<Quiz , Integer> {

	    public Quiz findQuestionById(int id);

	  

	    public List<Quiz> findquizbyquestion(String question);

	    
	}


}
