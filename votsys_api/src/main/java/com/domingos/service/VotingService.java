package com.domingos.service;

import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import com.domingos.model.Participant;

@Service
public class VotingService {

	private static final String TOPIC_VOTING = "voting";

	private final KafkaTemplate<String, Participant> kafkaTemplate;

	public VotingService(KafkaTemplate<String, Participant> kafkaTemplate) {
		this.kafkaTemplate = kafkaTemplate;
	}

	public void addEvent(Participant participant) {
		kafkaTemplate.send(TOPIC_VOTING, participant);
	}
}
