package com.example.Backend.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "aulas")
@Inheritance(strategy = InheritanceType.JOINED)
public class Aula {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String numero;
    private String piso;
    private int capacidad;
    private boolean habilitada;
    @OneToMany(mappedBy = "aula")
    private List<ReservaDetalle> reservas;

}