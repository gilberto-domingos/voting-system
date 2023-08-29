package com.domingos.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.domingos.model.Parametric;

public interface ParametricRepository extends MongoRepository<Parametric, String>{

}
