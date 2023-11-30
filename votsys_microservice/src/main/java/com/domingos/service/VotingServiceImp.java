package com.domingos.service;

import java.util.Date;

import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import com.domingos.model.Participant;
import com.domingos.model.Voting;
import com.domingos.repository.VotingRepository;

@Service
public class VotingServiceImp {

	private static final Logger log = LoggerFactory.getLogger(VotingServiceImp.class);

    private final VotingRepository votingRepository;

    public VotingServiceImp(VotingRepository votingRepository) {
        this.votingRepository = votingRepository;
    }

    @KafkaListener(topics = "voting", groupId = "MicroServiceVoting")
    public void executer(ConsumerRecord<String, Participant> register) {

        Participant participant = register.value();
        log.info("Voto recebido = {}", participant);
        
        Voting voting = new Voting(null, participant, new Date());
        this.votingRepository.save(voting);
        
        log.info("Voto registrado com sucesso [id={}, dateTime={}]", voting.getId(), voting.getDateTime()); 

    }
}