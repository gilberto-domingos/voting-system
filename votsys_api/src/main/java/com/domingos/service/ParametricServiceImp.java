package com.domingos.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.domingos.model.Parametric;
import com.domingos.repository.ParametricRepository;

@Service
public class ParametricServiceImp implements ParametricService {

	private ParametricRepository parametricRespository;

	public ParametricServiceImp(ParametricRepository parametricRespository) {
		this.parametricRespository = parametricRespository;
	}

	@Override
	public Parametric create(Parametric parametric) {
		return parametricRespository.save(parametric);
	}

	@Override
	public List<Parametric> findAll() {
		return parametricRespository.findAll();
	}

	@Override
	public Parametric findById(String key) {
		return this.parametricRespository.findById(key).get();
	}

}
