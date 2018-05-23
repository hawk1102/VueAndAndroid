package com.example.user.androidandjs;

import java.io.Serializable;

/**
 * Created by zitan on 2018/5/22.
 */

public class Person implements Serializable {
    private String name;
    private int age;
    private boolean isBoy;

    public String getName() {
        return name == null ? "" : name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public boolean isBoy() {
        return isBoy;
    }

    public void setBoy(boolean boy) {
        isBoy = boy;
    }

    @Override
    public String toString() {
        return "Person{" +
                "name='" + name + '\'' +
                ", age='" + age + '\'' +
                ", isBoy=" + isBoy +
                '}';
    }
}
