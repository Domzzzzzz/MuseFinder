module ApplicationHelper

  # This helper calculates age from a user's DOB
  def age(dob)
    (Date.today - dob).to_i / 365
  end

  # Helper to display how long ago a post was created
  def how_long_ago(post)
    if post.created_at > Time.now.beginning_of_day
      "Posted " + time_ago_in_words(post.created_at) + " ago"
    else
      "Posted on " + post.created_at.strftime("%b %d, %Y")
    end
  end

end
