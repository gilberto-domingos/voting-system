package com.domingos.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.domingos.model.Participant;
import com.domingos.service.ParticipantService;

@RestController
@RequestMapping("/api/part")
public class ParticipantController {

	private ParticipantService participantService;

	public ParticipantController(ParticipantService participantService) {
		this.participantService = participantService;
	}

	@PostMapping("/save")
	@ResponseBody
	@ResponseStatus
	public ResponseEntity<Participant> create(@RequestBody Participant participant) {
		Participant createParticipant = participantService.create(participant);
		return ResponseEntity.ok(createParticipant);
	}

	
    
	@GetMapping("/get")
	@ResponseBody
	public ResponseEntity<?> findAll() {
		List<Participant> participants = participantService.findAll();
		return ResponseEntity.ok(participants);
	}

	@GetMapping("/{id}")
	@ResponseBody
	public ResponseEntity<Participant> findById(@PathVariable(value = "id") String id) {
		Participant participant = this.participantService.findById(id);

		if (participant != null) {
			return new ResponseEntity<>(participant, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

	}

}
