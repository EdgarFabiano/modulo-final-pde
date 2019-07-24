package br.net.mirante.pde.service;

import br.net.mirante.pde.entity.Usuario;
import br.net.mirante.pde.pojo.Login;
import br.net.mirante.pde.repository.UsuarioRepository;
import br.net.mirante.pde.repository.custom.UsuarioRepositoryCustom;
import org.springframework.stereotype.Service;

import javax.annotation.ManagedBean;
import javax.inject.Inject;

/**
 * Classe que disponibiliza metodos de servico de Usuario.
 */
@Service
@ManagedBean
public class UsuarioService {

    @Inject
    UsuarioRepository usuarioRepository;

    @Inject
    UsuarioRepositoryCustom usuarioRepositoryCustom;

    public Boolean autenticarUsuario(Login login) {
        return usuarioRepositoryCustom.authenticateUser(login);
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
