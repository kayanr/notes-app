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

    //    Request: GET /note/{id}
//    Response: Note
    @GetMapping("/note/{id}")
    public Note getNoteById(@PathVariable int id){
        return noteRepository.findById(id);
    }


    @PostMapping("/note")
    public Note saveExpense(@RequestBody Note note){
        return noteRepository.save(note);
    }



    //    Request: DELETE /note/{id}
//    Response: void
    @DeleteMapping("/note/{id}")
    public void deleteNoteById(@PathVariable int id){
        noteRepository.deleteById(id);
    }

    //    Request: DELETE /note Note
//    Response: void
    @DeleteMapping("/note")
    public void deleteNote(@RequestBody Note note){
        noteRepository.delete(note);
    }

}

