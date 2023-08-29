package com.domingos.service;

import java.util.List;

import com.domingos.model.Parametric;

public interface ParametricService {
	public Parametric create(Parametric parametric);

	public List<Parametric> findAll();

	public Parametric findById(String key);
}
