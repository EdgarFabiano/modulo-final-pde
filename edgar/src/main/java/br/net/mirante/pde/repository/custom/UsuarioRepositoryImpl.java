package br.net.mirante.pde.repository.custom;

import br.net.mirante.pde.entity.QUsuario;
import br.net.mirante.pde.pojo.Login;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import br.net.mirante.pde.entity.Usuario;

import javax.inject.Inject;
import javax.inject.Named;
import javax.persistence.EntityManager;
import java.util.Objects;

@Named
public class UsuarioRepositoryImpl implements UsuarioRepositoryCustom {

    @Inject
    EntityManager em;

    private QUsuario usuario = QUsuario.usuario;

    private JPAQuery<Usuario> getUsuarioQuery() {
        return new JPAQueryFactory(em).select(usuario).from(usuario);
    }

    /**
     * Autentica o {{@link Login}} de um usuário com as suas credenciais.
     * Compara o login e a senha (com hash) passada com algum usuário do banco.
     *
     * @param loginComHash Credenciais de login do usuário com hash aplicado.
     * @return Boolean para autenticação.
     */
    @Override
    public Boolean authenticateUser(Login loginComHash) {
        return Objects.nonNull(getUsuarioQuery()
                .where(usuario.login.eq(loginComHash.getLogin())
                        .and(usuario.senha.eq(loginComHash.getSenha())))
                .fetchOne());

    }

}
