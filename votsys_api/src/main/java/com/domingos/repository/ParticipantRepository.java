package com.domingos.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.domingos.model.Participant;

public interface ParticipantRepository extends MongoRepository<Participant, String> {

}
