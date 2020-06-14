package com.hw.notesrest.repository;

import com.hw.notesrest.model.Note;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface NoteRepository  extends CrudRepository<Note, Integer> {
    List <Note> findAll();
    Note findById(int id);


}
