package br.net.mirante.pde.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

/**
 * Classe que cuida da entidade {{@link Usuario}} no banco.
 */
@Entity
@AllArgsConstructor
@NoArgsConstructor
public @Data
class Usuario extends BaseEntity<Long> {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    @NotNull
    private String nome;

    @Column(unique = true)
    @NotNull
    private String email;

    @Column(unique = true)
    @NotNull
    private String login;

    @Column
    @NotNull
    private String senha;

    @Column
    @Enumerated(EnumType.STRING)
    private Permissao permissao;

    @Override
    public Long getCod() {
        return getId();
    }

}
