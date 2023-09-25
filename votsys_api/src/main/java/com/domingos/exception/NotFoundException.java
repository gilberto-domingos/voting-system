package com.domingos.exception;

import java.io.Serializable;

public class NotFoundException extends RuntimeException implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
    public NotFoundException(String message) {
        super(message);
    }
}