package com.domingos.model;

import java.util.Date;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@EntityScan
@Document("votmicroserv")
public class Voting {
	
	@Id
	private String id;
	private Participant participant;
	private Date dateTime;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public Participant getParticipant() {
		return participant;
	}
	public void setParticipant(Participant participant) {
		this.participant = participant;
	}
	public Date getDateTime() {
		return dateTime;
	}
	public void setDateTime(Date dateTime) {
		this.dateTime = dateTime;
	}
	public Voting() {
	}
	
	public Voting(String id, Participant participant, Date dateTime) {
		this.id = id;
		this.participant = participant;
		this.dateTime = dateTime;
	}
	
	
	
     
}
