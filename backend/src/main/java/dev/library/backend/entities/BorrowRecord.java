package dev.library.backend.entities;

import java.io.Serializable;
import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import dev.library.backend.entities.enums.Status;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "borrow_records")
public class BorrowRecord implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @CreatedDate
    @DateTimeFormat(pattern = "DD-MM-YYYY")
    private LocalDateTime borrowDate;

    @DateTimeFormat(pattern = "DD-MM-YYYY")
    private LocalDateTime returnDate;

    @ManyToOne(cascade = CascadeType.DETACH)
    @JoinColumn(name = "user_id")
    @JsonManagedReference
    private User user;

    @ManyToOne(cascade = CascadeType.DETACH)
    @JoinColumn(name = "book_id")
    @JsonManagedReference
    private Book book;

    @Enumerated(EnumType.STRING)
    private Status status;
}
