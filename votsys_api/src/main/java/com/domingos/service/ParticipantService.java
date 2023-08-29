package com.domingos.service;

import java.util.List;

import com.domingos.model.Participant;

public interface ParticipantService {
	public Participant create(Participant participant);

	public List<Participant> findAll();

	public Participant findById(String id);

}
