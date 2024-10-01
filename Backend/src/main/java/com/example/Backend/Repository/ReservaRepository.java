package com.example.Backend.Repository;

import com.example.Backend.Entity.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservaRepository extends JpaRepository <Reserva,Long> {
}
