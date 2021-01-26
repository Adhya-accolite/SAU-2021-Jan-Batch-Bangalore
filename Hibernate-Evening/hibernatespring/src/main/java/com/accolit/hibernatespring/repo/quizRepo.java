package com.accolit.hibernatespring.repo;

import org.springframework.stereotype.Repository;

import com.accolit.hibernatespring.entities.Quiz;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import javax.transaction.Transactional;

	
	@Repository
	@Transactional
	public class quizRepo {

	    @PersistenceContext
	    EntityManager entityManager;

	    public void addQuestion(Quiz quiz){
	        entityManager.persist(quiz);
	    }

	    public Quiz getQuizById(int id){
	        return entityManager.find(Quiz.class, id);
	    }

	    public void deleteQuestion(Quiz quiz){
	        entityManager.remove(quiz);
	    }

	    public Quiz updateQuestion(Quiz quiz){
	        return entityManager.merge(quiz);
	    }

	    

	}


