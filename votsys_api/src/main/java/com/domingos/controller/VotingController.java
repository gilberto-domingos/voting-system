package com.domingos.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.domingos.model.Participant;
import com.domingos.service.VotingService;

@RestController
@RequestMapping("/api/vote")
public class VotingController {
	
	private VotingService votingService;

	public VotingController(VotingService votingService) {
		this.votingService = votingService;
	}
	
	@PostMapping
	public ResponseEntity<String>vote(@RequestBody Participant participant){
		this.votingService.addEvent(participant);
		return ResponseEntity.ok("voto computado");
	}	

}
