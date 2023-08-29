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
import org.springframework.web.bind.annotation.RestController;

import com.domingos.model.Parametric;
import com.domingos.service.ParametricService;

@RestController
@RequestMapping("/api/param")
public class ParametricController {

	private ParametricService parametricService;

	public ParametricController(ParametricService parametricService) {
		this.parametricService = parametricService;
	}

	@PostMapping("/save")
	public ResponseEntity<Parametric> create(@RequestBody Parametric parametric) {
		Parametric createdParametric = parametricService.create(parametric);
		return ResponseEntity.ok(createdParametric);
	}

	@GetMapping("/get")
	public ResponseEntity<List<Parametric>> findAll() {
		List<Parametric> parametrics = parametricService.findAll();
		return ResponseEntity.ok(parametrics);
	}
	
	@GetMapping("/{key}")
	@ResponseBody
	public ResponseEntity<Parametric> findById(@PathVariable(value = "key") String key) {
		Parametric parametric = this.parametricService.findById(key);

		if (parametric != null) {
			return new ResponseEntity<>(parametric, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

	}


}
