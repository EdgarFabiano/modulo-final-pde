package br.net.mirante.pde.util.format;

import org.apache.commons.lang3.StringUtils;

public class TextFormatUtil {

    public static String removeNonNumberCharacters(String m) {
        if (m != null) {
            return m.replaceAll("[^0-9]", StringUtils.EMPTY);
        } else {
            return m;
        }
    }

    public static String formatCpf(String cpf) {
        return StringUtils.isNumeric(cpf) &&
                cpf.length() == 11 ? cpf.replaceAll("(.{3})(.{3})(.{3})(.{2})", "$1.$2.$3-$4") : cpf;
    }

    public static String formatCnpj(String cnpj) {
        return StringUtils.isNumeric(cnpj) &&
                cnpj.length() == 14 ? cnpj.replaceAll("(.{2})(.{3})(.{3})(.{4})(.{2})", "$1.$2.$3/$4-$5") : cnpj;
    }

    public static String formatCpfCnpj(String cpfCnpj) {
        return StringUtils.isNumeric(cpfCnpj) &&
                cpfCnpj.length() == 11 ? formatCpf(cpfCnpj) : formatCnpj(cpfCnpj);
    }

    public static String formatTelefone(String telefone) {
        return StringUtils.isNumeric(telefone) &&
                (telefone.length() == 11 || telefone.length() == 10) ? telefone.replaceAll("(.{2})(.{4,5})(.{4})", "($1) $2-$3") : telefone;
    }

    public static String formatCep(String cep) {
        return StringUtils.isNumeric(cep) &&
                cep.length() == 8 ? cep.replaceAll("(.{2})(.{3})(.{3})", "$1.$2-$3") : cep;
    }

}
