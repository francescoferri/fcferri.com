---
layout: default
title: Francesco Ferri
permalink: /projects/
---

<section id="projects-page" class="projects-page">
    <div class="projects-wrapper">
        <h2>My Projects</h2>
        {% assign sorted_projects = site.projects | sort: 'date' | reverse %} {%
        for project in sorted_projects %}
        <div class="featured-project">  
            <div class="feat-img">
                <img src="{{ site.baseurl }}/images/{{ project.image }}" />
            </div>
            <div class="feat-text">
                <h3>
                    <a
                        class="post-link"
                        href="{{ project.url | prepend: site.baseurl }}"
                        >{{ project.title }}</a
                    >
                </h3>
                <span class="post-meta"
                    >{{ project.date | date: "%b %-d, %Y" }}</span
                >
                {{ project.excerpt }}
                <div class="redirect-cta">
                    <a
                        class="classic-cta"
                        href="{{ project.url | prepend: site.baseurl }}"
                        >Read More</a
                    >
                </div>
            </div>
        </div>
        {% endfor %}
    </div>
</section>
