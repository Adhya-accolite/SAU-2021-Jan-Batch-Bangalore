package com.au.kafka;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class KafkaSendService {
	
	@Autowired
	private KafkaTemplate<String,String> kafkatemp;
	
	String afterpass = "AfterPass";
	
	@KafkaListener(topics="BeforePass", groupId="kafka")
	public void send(String messege)
	{
		kafkatemp.send(afterpass,messege);
	}
	
}