package com.hw.notesrest.controller;

import com.hw.notesrest.model.Note;
import com.hw.notesrest.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class NoteController  {

    @Autowired
    private NoteRepository noteRepository;

    //    Request: GET /ping
    //    Response: "Up"
    @GetMapping("/ping")
    public String ping(){
        return "Up -notes";
    }

    //    Request: GET /notes
    //    Response: Note[]
    @GetMapping("/notes")
    public List<Note> getAllNotes(){
        return noteRepository.findAll();
    }

    //Request: POST /note Note
    //Response: Note
    @PostMapping("/note")
    public Note saveExpense(@RequestBody Note note){
        return noteRepository.save(note);
    }

}
