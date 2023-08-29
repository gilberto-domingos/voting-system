package com.domingos.service;

import org.apache.kafka.clients.consumer.ConsumerRecord;

import com.domingos.model.Participant;

public interface VotingService {
	public void executer(ConsumerRecord<String, Participant> register);
}
