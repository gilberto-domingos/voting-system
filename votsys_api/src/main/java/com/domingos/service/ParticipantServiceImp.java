package com.domingos.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.domingos.model.Participant;
import com.domingos.repository.ParticipantRepository;

@Service
public class ParticipantServiceImp implements ParticipantService {

	private ParticipantRepository participantRepository;

	public ParticipantServiceImp(ParticipantRepository participantRepository) {
		this.participantRepository = participantRepository;
	}

	@Override
	public Participant create(Participant participant) {
		return this.participantRepository.save(participant);
	}

	@Override
	public List<Participant> findAll() {
		return this.participantRepository.findAll();
	}

	@Override
	public Participant findById(String id) {
		return this.participantRepository.findById(id).get();
	}

}
