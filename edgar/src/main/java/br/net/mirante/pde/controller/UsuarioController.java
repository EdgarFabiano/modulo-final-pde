package br.net.mirante.pde.controller;

import br.net.mirante.pde.entity.Usuario;
import br.net.mirante.pde.service.UsuarioService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UsuarioController {

    @Inject
    private UsuarioService usuarioService;

    @GetMapping("/users")
    public List<Usuario> getUsers() {
        return usuarioService.findAll();
    }

}
