package com.examenpractico.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examenpractico.exception.ResourceNotFoundException;
import com.examenpractico.model.Usuario;
import com.examenpractico.repository.UsuarioRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/usuarios")
public class UsuarioController {
	
	@Autowired
	private UsuarioRepository usuarioRepository;

	@GetMapping("/")
	public List<Usuario> listarUsuarios(){
		return usuarioRepository.findAll();
	}
	
	@PostMapping("/")
	public Usuario registrar(@RequestBody Usuario usuario) {
		return usuarioRepository.save(usuario);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Usuario> buscarById(@PathVariable Long id){
		Usuario usuario = usuarioRepository.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("No existe el usuario con el Id: "+id));		
		return ResponseEntity.ok(usuario);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Map<String, Boolean>> eliminarUsuario(@PathVariable Long id){
		Usuario usuario = usuarioRepository.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("No existe el usuario con el Id: "+id));	
		
		usuarioRepository.delete(usuario);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Usuario> actualizarUsuario(@PathVariable Long id, @RequestBody Usuario usuarioRequest) {
		Usuario usuario = usuarioRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No existe un usuario con el ID: " + id));

		usuario.setNombre(usuarioRequest.getNombre());
		usuario.setApellido(usuarioRequest.getApellido());		
		usuario.setPasswd(usuarioRequest.getPasswd());
		usuario.setEmail(usuarioRequest.getEmail());
		usuario.setEstado(usuarioRequest.getEstado());

		Usuario usuarioActualizado = usuarioRepository.save(usuario);
		return ResponseEntity.ok(usuarioActualizado);
	}
}
