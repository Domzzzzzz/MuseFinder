module ApplicationHelper

  # This helper calculates age from a user's DOB
  def age(dob)
    (Date.today - dob).to_i / 365
  end

  # only apostrophe is concatenated if first_name ends with s
  # otherwise apostrophe + s is concatenated
  def add_apostrophe(first_name)
    if first_name[-1] == 's' || first_name[-1] == 'S' || first_name[-1] == 'z' || first_name[-1] == 'Z'
      first_name += "'"
    else
      first_name += "'s"
    end
  end


end
