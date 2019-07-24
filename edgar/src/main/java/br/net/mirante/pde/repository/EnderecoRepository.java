package br.net.mirante.pde.repository;

import br.net.mirante.pde.entity.Endereco;
import br.net.mirante.pde.entity.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EnderecoRepository extends JpaRepository<Endereco, Long> {
}
