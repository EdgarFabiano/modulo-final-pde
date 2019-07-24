package br.net.mirante.pde.service;

import br.net.mirante.pde.entity.Usuario;
import br.net.mirante.pde.pojo.Login;
import br.net.mirante.pde.repository.UsuarioRepository;
import org.springframework.stereotype.Service;

import javax.inject.Inject;

@Service
public class UsuarioService {

    @Inject
    UsuarioRepository usuarioRepository;

    public Boolean autenticarUsuario(Login login) {
        return usuarioRepository.authenticateUser(login);
    }

    public Boolean autenticarUsuario(String login, String senha) {
        return autenticarUsuario(new Login(login, senha));
    }

    public Usuario salvarUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public Usuario buscar(Long id) {
        return usuarioRepository.findById(id).orElse(null);
    }

}
