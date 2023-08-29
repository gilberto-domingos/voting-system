package com.domingos.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.domingos.model.Voting;

public interface VotingRepository extends MongoRepository<Voting,String> {
     
}
