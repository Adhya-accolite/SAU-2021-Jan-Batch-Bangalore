package com.accolit.hibernatespring;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.accolit.hibernatespring.entities.Option;
import com.accolit.hibernatespring.entities.Quiz;
import com.accolit.hibernatespring.entities.School;
import com.accolit.hibernatespring.repo.quizJPARepo;
import com.accolit.hibernatespring.repo.quizRepo;

@SpringBootApplication
@Transactional
public class HibernatespringApplication implements CommandLineRunner {

	 @Resource
	    quizRepo quizrepo;

	    @Autowired
	    quizJPARepo quizjparepo;

	public static void main(String[] args) {
		SpringApplication.run(HibernatespringApplication.class, args);
	}

	@Override
    public void run(String... args) throws Exception {

         Option option= new Option();
        option.setOption("8");
        option.setIsCorrect(true);

        Quiz quiz = new Quiz();
        quiz.setQuestion("What's");
        Quiz quiz1 = new Quiz();
        quiz.setQuestion("Who's");

        

        List<Quiz> QuizSet = new ArrayList<>();
        QuizSet.add(quiz);
        QuizSet.add(quiz1);

       School school = new School();
        school.setQuiz(QuizSet);
        school.setAddress("Chennai");
       

       quizrepo.addQuestion(quiz);

        
	

    }
}
