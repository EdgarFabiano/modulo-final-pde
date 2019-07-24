package br.net.mirante.pde.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * Plain Java Object para Login.
 */
@AllArgsConstructor
@NoArgsConstructor
public @Data
class Login implements Serializable {

    private String login;
    private String senha;

}
