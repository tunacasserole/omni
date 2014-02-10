Buildit::Sequence.create(sequence_code: 'APPROVAL_NBR', padding: 3, value: 1000) unless Buildit::Sequence.where(sequence_code: 'APPROVAL_NBR').first
Buildit::Sequence.create(sequence_code: 'CASE_NBR', padding: 3, value: 1000) unless Buildit::Sequence.where(sequence_code: 'CASE_NBR').first
Buildit::Sequence.create(sequence_code: 'FEATURE_NBR', padding: 3, value: 1000) unless Buildit::Sequence.where(sequence_code: 'FEATURE_NBR').first
Buildit::Sequence.create(sequence_code: 'PROJECT_NBR', padding: 3, value: 1000) unless Buildit::Sequence.where(sequence_code: 'PROJECT_NBR').first
Buildit::Sequence.create(sequence_code: 'CHECKLIST_NBR', padding: 3, value: 1000) unless Buildit::Sequence.where(sequence_code: 'CHECKLIST_NBR').first
Buildit::Sequence.create(sequence_code: 'TASK_NBR', padding: 3, value: 1000) unless Buildit::Sequence.where(sequence_code: 'TASK_NBR').first
