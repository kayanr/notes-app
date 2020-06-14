package com.hw.notesrest.model;

import javax.persistence.*;

@Entity
@Table(name="notes")

public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String text;
    private String color;

    //constructors
    public Note(){}

    public Note(String text, String color) {
        this.text = text;
        this.color = color;
    }

    //Getter and Setter Methods
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }
}
