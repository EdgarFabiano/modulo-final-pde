package br.net.mirante.pde.service;

import br.net.mirante.pde.security.PasswordHashing;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.junit4.SpringRunner;

import javax.inject.Inject;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UsuarioServiceTest {

    @Inject
    UsuarioService usuarioService;

    @Test
    @Sql("classpath:db/test/usuario-test.sql")
    public void autenticarUsuario() {
        assertThat(usuarioService.autenticarUsuario("edgar", PasswordHashing.generateHash("edgar123"))).isTrue();
        assertThat(usuarioService.autenticarUsuario("marcos", PasswordHashing.generateHash("marcos123"))).isTrue();
        assertThat(usuarioService.autenticarUsuario("william", PasswordHashing.generateHash("william123"))).isTrue();
    }

    @Test
    @Sql("classpath:db/test/usuario-test.sql")
    public void autenticarUsuarioFail() {
        assertThat(usuarioService.autenticarUsuario("edgar", PasswordHashing.generateHash("Edgar123"))).isFalse();
        assertThat(usuarioService.autenticarUsuario("marcos", PasswordHashing.generateHash("marcos1234"))).isFalse();
        assertThat(usuarioService.autenticarUsuario("william", PasswordHashing.generateHash("will123"))).isFalse();
    }

}